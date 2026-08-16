# LangChain and LangGraph

## LangChain

### 入门

v0.3和v1.X不兼容

### IO

i/o 提示词模板+LLM+输出解析器

### promptTemplate

role: system,user,助手，工具

#### 模型调用方法

普通调用：invoke,ainvoke

流式调用：stream,astream

批处理：batch,abatch

#### 提示词模板

PromptTemplate：文本提示词模板

ChatPromptTemplate：聊天模型提示词模板 

还有 少样本学习提示词模板 、 管道提示词模板 

### 输出解析器

字符串解析器StrOutputParser

Json解析器JsonOutputParser

### LCEL 链式调用

 Runnable 是 LangChain 中所有链的通用接口，用于描述“可以执行的数据流节点” 

 chain = prompt | model | output_parser 



顺序链： 提示词模板+大模型+输出解析器 

分支链： 使用条件分支判断 (条件，Runnable) 对列表和默认分支进行初始化 

串行链： 子链叠加串行 

并行链： 同时运行多个子链（Chain），并在它们都完成后汇总结果。

函数链：把一个普通的 Python 函数（lambda 或 def） 转换为一个 可执行的链



### Memory

内存版 RunnableWithMessageHistory

持久化版 RedisChatMessageHistory

存到 RedisStack 中，增加了Json,图的支持，支持全文搜索和向量搜索

### Tools

Function call, 用@tool装饰器

### vector

text-embedding-v4， Qwen3-Embedding 

faiss，适合本地开发，后续准备换

### RAG 检索增强生成

加载文件-分割-嵌入模型生成向量，保存到向量数据库

用户提出问题，生成向量，通过向量数据库相似性检索，返回关联文本，加入提示词模板中，返回答案给用户

分割：

 将文本字符串分割成字符串列表 

 将Document对象列表分割成更小文本片段的Document对象列表 

### MCP 模型上下文协议

 提供了一种标准化的方式来连接 LLMs 需要的上下文，MCP 就类似于一个 Agent 时代的 Type-C协议，希望能将不同来源的数据、工具、服务统一起来供大模型调用 

 FastMCP 

### Agent

Agent = LLM + Memory + Tools + Planning + Action

 Agent 的核心是 推理 + 行动（Reason + Act），也就是 ReAct 模式 

 **A2A 调度 = 多个功能单一的 Runnable 子 Agent 链 + 一个控制调用逻辑的总协调器**。 

多个子agent拼成一个结果返回

## LangGraph

### 入门

 **LangGraph = LangChain + 图编排 + 状态机** 

### API

#### 图

#### 状态

Reducer:默认覆盖更新，还有消息列表追加，列表、字符串、数值类型的追加，数值相乘，自定义合并逻辑

#### 节点

 为节点添加重试策略 

 错误处理和重试机制来指定重试次数、重试间隔、重试异常等，用于保证系统的可靠性 

#### 边

普通边，条件边，入口点，条件入口点

#### send

拆分多个，最后合并

#### command

在节点中判定下一个走哪个节点

#### Runtime context运行时上下文

 类似微服务的YML文件，配置和代码分离，信息从配置文件读取 

### 高级特性

#### 流式

 LangGraph有stream（同步）和astream（异步）方法，以迭代器的形式生成流式输出。 

#### 持久化

 在 LangGraph 如果使用了持久化，工作流执行的每个步骤结束后，系统会自动将当前整个图的状态（包括所有变量、历史消息、下一步要执行的节点等信息）完整地保存下来，这份存档就是一个检查点（Checkpoint），LangGraph支持存储在内存、Redis、DB等存储介质中。 

 InMemoryStore、RedisStore、AsyncPostgresStore 

### 时间回溯

可以跳到某一步（比如第 3 次工具调用前），从那个状态继续，甚至尝试不同的分支 

从 get_state_history 中拿到列表，更新某个状态，从新点重新执行

### 子图

 在LangGraph中允许将一个完整的图作为另一个图的节点，

将子图做为父图的一个节点，父图的状态子图可以修改，子图私有状态因为父图没有定义所有不会显示

### A2A

MCP， 关于工具访问的协议 

A2A，agent之间的协作

#### 常见的智能体连接方式 

网络：每个都能和其它的通信

主管：一个主管，主管决定下一个调用哪一个agent

主管as工具调用：agent当成工具，主管使用一个支持工具调用的LLM来决定调哪个

层级式：每一层都有自己的主管

自定义：

 handoffs 指的是一个智能体将控制权交接给另一个智能体 ， Supervisor都默认使用了create_handoff_tool移交工具，我们也可以自己实现交接函数 









