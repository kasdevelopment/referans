from flask import Flask, jsonify, render_template
from flask_login import LoginManager

app = Flask(__name__)

login_manager = LoginManager()
login_manager.init_app(app)

@app.route("/")
def hello():
    return "<h3> Hello World! </h3>"


@app.route('/districts')
def getDistricts():
    district = {"adi": "ankara"}
    #return jsonify({"adi": "ankara"})
    return  render_template('index.html', data=district)


if __name__ == "__main__":
    app.run(debug=True)
