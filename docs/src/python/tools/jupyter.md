
# jupyter

## 使用

```shell
# 安装
conda install jupyter notebook
# 汉化，notebook版本7以上
conda install jupyterlab-language-pack-zh-CN
# or
conda install -c conda-forge jupyterlab-language-pack-zh-CN
# 启动，最好是在conda的base环境里启动
jupyter notebook
```

打开 `http://localhost:8888/`

```shell
# 如果报jupyterlab相关的错，可以将jupyterlab重新安装一下
pip uninstall jupyterlab
pip install jupyterlab
jupyter lab build
jupyter lab
```

## 切换内核

```shell
# 在需要新加入内核的环境里安装ipykernel
conda activate data-mining
conda install ipykernel
python -m ipykernel install --user --name [Your enviroment name] --display-name "[Name you want to show in jupyter]"
# 如
python -m ipykernel install --user --name data-mining --display-name data-mining
# 切换到base环境启动jupyter notebook
conda activate base
jupyter notebook
# 然后 在页面菜单里 内核->更换内核 切换

# 如果需要删除内核
jupyter kernelspec list # 查看内核列表
jupyter kernelspec remove data-mining # 删除名为data-mining的内核
```

## 卸载

删除`jupyter`、`notebook`开头的相关包

删除 `C:\Users\用户名\AppData\Roaming\jupyter`文件夹

## cell使用

一对 In Out 会话被视作一个代码单元，称为 cell

编辑模式：

- enter
- 鼠标直接点

命令模式：

- esc
- 鼠标在本单元格之外点一下

快捷键操作

- 执行代码：shift + enter

命令模式：

- A，在当前 cell 的上面添加 cell
- B，在当前 cell 的下面添加 cell
- 双击 D：删除当前 cell
- y or m 切换 code 和 markdown

编辑模式：

- 多光标操作：Ctrl 键点击鼠标
- 回退：Ctrl+Z
- 补全代码：变量、方法后跟 Tab 键
- 为一行或多行代码添加/取消注释：Ctrl+/
