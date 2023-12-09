// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import httpProxy from 'http-proxy'
import Cookies from 'cookies'

// type Data = {
//   name: string
// }

// bình thường nó sẽ tự động passer body để gửi request param body,
// add code below is not passer and will send data body
export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    // convert cookies to header Authorization
    const cookies = new Cookies(req, res)

    const accessToken = cookies.get('access_token')

    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }

    // don't send cookies to API sever

    req.headers.cookie = ''

    proxy.web(req, res, {
      // dung domain duoc set trong env

      target: process.env.API_URL,

      // changeOrigin: true/false, Default: false - changes the origin of the host header to the target URL
      changeOrigin: true,
      // proxy se xu ly response tra ve   selfHandleResponse: false,
      selfHandleResponse: false,
    })

    // khi có selfHandleResponse: false thì sẽ không cần xử lý cái này
    //   res.status(200).json({ name: 'Path Match All ' })
  })
}
