from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def hello():
    return "<h3> Hello World! </h3>"


@app.route('/districts')
def getDistricts():
    return jsonify('{"adi": "ankara"}')


if __name__ == "__main__":
    app.run(debug=True)
