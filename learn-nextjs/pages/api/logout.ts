// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import httpProxy from 'http-proxy'
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
  // đối với logout k cần ghi lên proxy
  // xư lý cookies
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method not support' })
  }

  const cookies = new Cookies(req, res)
  cookies.set('access_token')
  res.status(200).json({ message: 'logout successfully' })
}
