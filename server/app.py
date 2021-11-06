from flask import Flask, request
from flask_cors import CORS, cross_origin

from cryptography import encrypt, decrypt


app = Flask(__name__)

cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
@cross_origin()
def index():
    return "hello world"

@app.route('/encrypt', methods=['GET'])
@cross_origin()
def encryptionHandler():
    assert request.method == 'GET', "/encrypt route should only have GET method"
    # print("request = ", request.args)
    cipher = encrypt(request.args['plaintext'], int(request.args['key']))
    return cipher

@app.route('/decrypt', methods=(['GET']))
@cross_origin()
def decryptionHandler():
    assert request.method == 'GET', "/decrypt route should only have GET method"
    plaintext = decrypt(request.args['ciphertext'], int(request.args['key']))
    return plaintext

if __name__ == "__main__":
    app.run(debug=True)