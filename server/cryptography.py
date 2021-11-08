import pycld2 as cld2

def encrypt(plain_text,key):
  plain_text = plain_text.upper()
  op=''
  for i in plain_text:
    if i!=' ':
      val = ord(i)
      new_val = ((val-65+key)%26)+65
      op += chr(new_val)
    else:
      op += ' '
  return op

def decrypt(cipher_text,key):
  op=''
  for i in cipher_text:
    if i!=' ':
      val = ord(i)
      new_val = ((val-65-key)%26)+65
      op += chr(new_val)
    else:
      op += ' '
  return op


def get_letter_freq(text):
  letters=' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  letter_frequency = {}
  
  for letter in letters:
    letter_frequency[letter] = 0

  for letter in text:
    if letter in letters:
      letter_frequency[letter] += 1
  return letter_frequency


def sort_letter_freq(letter_frequency):
  sorted_letter_freq = [k for k,v in sorted(letter_frequency.items(), key=lambda item: item[1],reverse=True)]
  return sorted_letter_freq


def decrypt_freq(cipher_text,ub=1):

  cipher_text = cipher_text.upper()

  letter_frequency = get_letter_freq(cipher_text)
  
  sorted_letter_freq = sort_letter_freq(letter_frequency)
  
  # plain_texts = []
  plaintexts = {}
  order = 1
  idx=0
  if sorted_letter_freq[0] == ' ':
    idx=1
  for i in range(ub):
    key = (ord(sorted_letter_freq[idx])-ord('E'))
    idx +=1
    plaintexts[key] = {"key": key, "order": order, "plaintext": decrypt(cipher_text, key)}
    order += 1
    # plain_texts.append(decrypt(cipher_text,key))
  return plaintexts

def bruteForce(cipherText, giveAll=False):
  obj = {}
  for i in range(0, 26):
    text_content = decrypt(cipherText, i)
    isReliable, textBytesFound, details = cld2.detect(text_content)
    if giveAll==False:
      if(details[0][1] == 'en'):
        obj[i] = {"key": i ,"plaintext": text_content, "language": details[0][1], "confidence": details[0][2]}
    else:
      obj[i] = {"key": i , "plaintext": text_content, "language": details[0][1], "confidence": details[0][2]}
  
  
  return obj

