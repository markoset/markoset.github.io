new TypeIt('#element', {
  speed: 45
})
.type('Halaman ini saa')
.pause(300)
.options({speed: 200})
.delete(1)
.options({speed: 45})
.pause(300)
.type('ya buat hanya karena ngantuk')
.pause(300)
.options({speed: 200})
.delete(7)
.type('hobi ')
.pause(300)
.options({speed: 45})
.type('dan sekaligus untuk menghilangkan rasa bosan saja :)');
