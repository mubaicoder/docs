# uv

[https://hellowac.github.io/uv-zh-cn/#homebrew](https://hellowac.github.io/uv-zh-cn/#homebrew)

## 安装

[https://hellowac.github.io/uv-zh-cn/getting-started/installation/#_2](https://hellowac.github.io/uv-zh-cn/getting-started/installation/#_2)

[https://github.com/astral-sh/uv/releases](https://github.com/astral-sh/uv/releases)

## 使用

```shell
# 创建项目
uv init
# 添加依赖项，可以使用 --dev、--group 或 --optional 标志将依赖项添加到其他表中
uv add httpx
# 删除依赖项
uv remove httpx
# 修改依赖项
uv add 'httpx>0.1.0'
# 特定平台依赖项
uv add 'jax; sys_platform == "linux"'
# 特定版本依赖项，Python 3.11 及更高版本上包含 numpy
uv add 'numpy; python_version >= "3.11"'
```

## 命令

```shell
# 创建环境
uv venv --python 3.11
# 安装包
uv pip install ruff
uv pip install 'ruff==0.3.0'
# 激活环境
.venv\Scripts\activate
# 从requirements.txt安装
uv pip install -r requirements.txt
# 从pyproject.toml安装
uv pip install -r pyproject.toml
# 卸载包
uv pip uninstall flask
# 列出环境中所有已安装的包
uv pip list
# 以 JSON 格式列出包
uv pip list --format json
# 以 requirements.txt 格式列出环境中所有包
uv pip freeze
# 要锁定在 pyproject.toml 中声明的依赖
uv pip compile pyproject.toml -o requirements.txt
# 要锁定在 requirements.in 中声明的依赖
uv pip compile requirements.in -o requirements.txt
# 生成锁
uv lock
# 锁文件生成requirements.txt
uv export --format requirements-txt
```
