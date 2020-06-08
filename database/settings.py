import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

AP= os.environ.get("API_KEY") # 環境変数の値をAPに代入
mongo_user = os.environ.get("MONGO_USER")
mongo_pwd = os.environ.get("MONGO_PWD")
mongo_coll = os.environ.get("MONGO_COLL")