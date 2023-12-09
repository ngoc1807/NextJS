// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

type Data = {
  message: string
}

// bình thường nó sẽ tự động passer body để gửi request param body,
// add code below is not passer and will send data body
export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method not support' })
  }

  return new Promise((resolve) => {
    // don't send cookies to API sever
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''
      //  streaming data
      proxyRes.on('data', function (chuck) {
        body += chuck
      })
      // streaming data has done

      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body)
          console.log({ accessToken, expiredAt })

          // covert token to cookies
          // { secure: process.env.NODE_ENV !== 'development' } nói đây là 1 cái secure tùy thuộc vào môi trường
          //
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          })

          // res.end('my response to cli')
          // ép kiểu về nextjs
          ;(res as NextApiResponse).status(200).json({ message: 'Login success' })
          resolve(true)
        } catch (error) {
          ;(res as NextApiResponse).status(500).json({ message: 'Some thing went wrong' })
        }
      })
    }

    proxy.once('proxyRes', handleLoginResponse)

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    })

    //
  })
}
