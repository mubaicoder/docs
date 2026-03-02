
# py.exe

适用于 Windows 的 Python 启动器，有助于在 (Windows) 系统上执行具有不同Python版本的 Python 脚本，一般安装在`C:\Windows`

参考：[https://renenyffenegger.ch/notes/Windows/dirs/Windows/py_exe](https://renenyffenegger.ch/notes/Windows/dirs/Windows/py_exe)

## 用法

```shell
# Show installed Python versions
py -0 # 电脑上通过.exe安装的python的列表
# Run a script (or here: command) with the newest Python 2 version
py -2 -c "import sys; print (sys.version)"
# Run a script (or here: command) with the newest Python 3 version
py -3 -c "import sys; print (sys.version)"
# Specify a more exact version
py -3.6 test.py
# Showing the «real» interpreter
py -c "import sys; print (sys.executable)"
```
