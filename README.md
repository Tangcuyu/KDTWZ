kdtwz
=====================

Powered by [KeystoneJS](http://keystonejs.com).


目录结构：

/   根目录
/dist   通过tsc编译后的keystone 生成文件目录
/front  angular2前端目录
/src    后台源代码目录
/templates  模板目录   

Run steps:

1. 进入front目录，运行 ng build
2. 返回根目录， 运行 npm start


前后组合思路：
在keystone项目根目录中建立前端框架目录front, 分别编译前端目录和后端目录。
编译前端目录后，利用copyStaticAssets.js拷贝前端编译后的文件到后台dist目录中的keystone静态目录文件：public文件夹中。