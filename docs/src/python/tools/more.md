# 更多工具

依赖库管理工具、格式化工具

## 依赖库管理工具

### pipreqs

#### 特点

1. 搜索依赖库的范围是基于目录的方式，很有针对性。
2. 搜索的依据是脚本中所import的内容。
3. 可以在未安装依赖库的环境上生成依赖文件。
4. 查找软件包信息时，可以指定查询方式（只在本地查询，在Pypi查询、或者在自定义的Pypi服务）

#### 安装

```shell
pip install pipreqs
```

#### 使用

```shell
pipreqs /home/project/location # 生成到location目录下
pipreqs ./ --encoding=utf-8 # 不加 --encoding=utf8 可能会出现编码问题
pipreqs ./ --encoding=utf-8 --force # 强制执行，覆盖原有的 requirements.txt 文件
```

### pigar

pigar 同样可以根据项目路径来生成依赖文件，而且会列出依赖库在文件中哪些位置使用到了

#### 安装

```shell
pip install pigar
```

#### 使用

```shell
pigar # 生成requirements.txt 文件
pigar -s bs4 MySQLdb # 通过“-s”参数，查找真实的依赖库
```

### pip-tools

pip-tools 包含一组管理项目依赖的工具：pip-compile 与 pip-sync，可以使用命令“pip install pip-tools”统一安装。它最大的优势是可以精准地控制项目的依赖库。

pip-compile 命令主要用于生成依赖文件和升级依赖库，支持在一个依赖文件中嵌套其它的依赖文件(例如，在 requirements.in 文件内，可以用“-c requirements.txt”方式，引入一个依赖文件)。

#### 安装

```shell
python -m pip install pip-tools -i https://pypi.douban.com/simple/
```

#### 使用

然后建立一个 `requirements.in` 文件，其中可以写入你需要的模块

```text
Django
jsonschema
```

执行命令

```shell
pip-compile requirements.in # 可生成带有关联依赖的`requirements.txt`
```

生成文件`requirements.txt`

```txt
asgiref==3.5.2
    # via django
attrs==22.1.0
    # via jsonschema
backports-zoneinfo==0.2.1
    # via django
django==4.1.2
    # via -r requirements.in
importlib-resources==5.10.0
    # via jsonschema
jsonschema==4.16.0
    # via -r requirements.in
pkgutil-resolve-name==1.3.10
    # via jsonschema
pyrsistent==0.19.1
    # via jsonschema
sqlparse==0.4.3
    # via django
tzdata==2022.6
    # via django
zipp==3.10.0
    # via importlib-resources
```

pip-sync 命令可以根据 requirements.txt 文件，来对虚拟环境中进行安装、升级或卸载依赖库(注意：除了 setuptools、pip 和 pip-tools 之外)。这样可以有针对性且按需精简地管理虚拟环境中的依赖库。

```shell
pip-sync dev-requirements.txt requirements.txt # 将多个“*.txt”依赖文件归并成一个
```

### pipdeptree

pipdeptree 是一个命令行实用程序，可识别安装在环境中python包，用于以依赖树的形式显示已安装的python包，它可为检测相互冲突的依赖包提供帮助。

#### 安装

```shell
pip install pipdeptree
```

#### 使用

```shell
pipdeptree # 查看所有包及其依赖
pipdeptree -p package # 查看指定包，其需要的依赖
pipdeptree -p package -r # 查看哪些包，依赖于此包
pipdeptree --json-tree > test.json # 生成json文件
pipdeptree -f | tee requirements.txt # 生成requirements.txt
```

## 格式化工具

[代码规范 PEP](https://peps.python.org/)

### pylint

检查违反 PEP 8 规范和常见错误的工具

#### 安装

```shell
pip install pylint
```

#### 使用

```shell
pylint [options] {source_file_or_directory}
```

### flake8

Python官方发布的一款辅助检测Python代码是否符合规范的工具

参考：[https://zhuanlan.zhihu.com/p/392178725](https://zhuanlan.zhihu.com/p/392178725)

#### 安装

```shell
pip install flake8
```

#### 使用

```shell
flake8 {directory}
```

### pycodestyle

pycodestyle 检查器提供基于 PEP-8 样式约定的代码建议，原名`pep8`

#### 安装

```shell
pip install pycodestyle
```

#### 使用

```shell
pycodestyle test.py
pycodestyle --statistics -qq test.py # 查看错误发生的频率
```

### black

代码格式化工具

参考：[https://muzing.top/posts/a29e4743/](https://muzing.top/posts/a29e4743/)

#### 安装

```shell
pip install black
```

#### 使用

```shell
black {source_file_or_directory}
# 跳过字符串格式化 Black 会默认将字符串格式化为使用双引号包裹，但有些项目已经使用了单引号的规范且不应修改为双引号，就需要加上一个 `-S / --skip-string-normalization` 的选项。
black -S {source_file_or_directory}
```

### autopep8

代码格式化工具

#### 安装

```shell
pip install autopep8
```

#### 使用

```shell
autopep8 --in-place --aggressive --aggressive test.py # 将格式化后的代码重新写入文件中
autopep8 --aggressive --aggressive test.py # 直接看格式化效果，不覆盖原有的代码
```

### yapf

Yapf是另一种有自己的配置项列表的重新格式化代码的工具。它与 Autopep8 的不同之处在于它不仅会指出代码中违反 PEP 8 规范的地方，还会对没有违反 PEP 8 但代码风格不一致的地方重新格式化，旨在令代码的可读性更强。

[配置项](https://github.com/google/yapf#usage)

#### 安装

```shell
pip install yapf
```

#### 使用

```shell
yapf [options] {source_file_or_directory}
```

### mypy

mypy是一款针对python的静态类型检查程序，默认情况下mypy不会提醒代码任何错误，如果使用的是Python3.6及以上版本，可以使用typing模块为代码进行类型标注，然后mypy就可以根据这些类型提示检查应用程序

参考：[https://www.modb.pro/db/127528](https://www.modb.pro/db/127528)

#### 安装

```shell
pip install mypy
```

#### 使用

```shell
mypy test.py
```

### pydocstyle

静态分析工具，用于检查是否符合python 文档字符串约定，支持 PEP 257 开箱即用

#### 安装

```shell
pip install pydocstyle
```

#### 使用

```shell
pydocstyle test.py # 格式化指定文件
pydocstyle . # 格式化目录
```

### isort

#### 背景

PEP8 有建议 Python 模块中 import 的导入顺序

1. 首先引入标准库里的模块
2. 然后引入第三方模块
3. 最后引入自己的模块

属于同一个部分的 import 语句按字母顺序排列

isort 可以自动将 Python 模块中的 import 进行排序，并自动按类型划分以满足上面说的 PEP8 规范

官网：[https://pycqa.github.io/isort/docs/configuration/options.html](https://pycqa.github.io/isort/docs/configuration/options.html)

参考：[https://zhuanlan.zhihu.com/p/392489048](https://zhuanlan.zhihu.com/p/392489048)

#### 安装

```shell
pip install isort
```

#### 使用

```shell
isort test.py test1.py # 格式化指定文件
isort . # 格式化目录
isort test.py --diff # 只显示修改建议，但不会修改文件
```

## 开发工具

### VS Code

配置：[https://code.visualstudio.com/docs/python/python-tutorial](https://code.visualstudio.com/docs/python/python-tutorial)

参考：[https://www.cnblogs.com/it-tsz/p/9346110.html](https://www.cnblogs.com/it-tsz/p/9346110.html)