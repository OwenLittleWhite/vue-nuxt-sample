import { Router } from 'express'
import Canvas from 'canvas'
import fs from 'fs'
import qr_image from 'qr-image'
const router = Router()

/* GET users listing. */
router.get('/pics', function (req, res, next) {
  const canvas = new Canvas(200, 200, 'svg')
  const ctx = canvas.getContext('2d')
  // Write "Awesome!"
  ctx.font = '30px Impact'
  ctx.rotate(0.2)
  ctx.fillText('Shit man!', 50, 100)
  // Draw line under text
  var text = ctx.measureText('Shit man!')
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath()
  ctx.lineTo(50, 102)
  ctx.lineTo(50 + text.width, 102)
  ctx.stroke()
  let qr = qr_image.image('<script>alert(1)</script>', { type: 'png' })
  qr.pipe(fs.createWriteStream('i_love_qr.png'))

  // let svg_string = qr_image.imageSync('I love QR!', { type: 'svg' })
  // console.log(canvas.toDataURL())
  let out = fs.createWriteStream('./text.svg')
  let stream = canvas.pngStream()
  stream.on('data', (chunk) => {
    out.write(chunk)
  })
  stream.on('end', () => {
    console.log('saved svg')
  })
  res.send(canvas.toDataURL())
  // Draw cat with lime helmet
})

export default router
