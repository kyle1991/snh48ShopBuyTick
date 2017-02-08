# coding=utf8
# 对验证码图片进行处理
from PIL import Image, ImageEnhance, ImageFilter

im = Image.open('tesseract/code.png').convert('L')
# 图像二值化
enhancer = ImageEnhance.Contrast(im)
im = enhancer.enhance(2)
im = im.convert('1')
data = im.getdata()
w, h = im.size
black_point = 0

for x in xrange(1, w - 1):
    for y in xrange(1, h - 1):
        mid_pixel = data[w * y + x] #中央像素点像素值
        if mid_pixel == 0:          #找出上下左右四个方向像素点像素值
            top_pixel = data[w * (y - 1) + x]
            left_pixel = data[w * y + (x - 1)]
            down_pixel = data[w * (y + 1) + x]
            right_pixel = data[w * y + (x + 1)]

            #判断上下左右的黑色像素点总个数
            if top_pixel == 0:
                black_point += 1
            if left_pixel == 0:
                black_point += 1
            if down_pixel == 0:
                black_point += 1
            if right_pixel == 0:
                black_point += 1

            # 判断
            if black_point <= 1:
                im.putpixel((x, y), 1)

            # 重置
            black_point = 0


# 裁剪图片，去掉周围的边
CHUXUE = 5
im = im.crop((0 + CHUXUE, 0 + CHUXUE, w - 1 - CHUXUE, h - 1 - CHUXUE))
# 保存图片
im.save('tesseract/test.png')
print('success')
