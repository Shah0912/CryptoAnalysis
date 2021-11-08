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

def decrypt_freq(cipher_text,ub):

  cipher_text = cipher_text.upper()

  letters=' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  letter_frequency = {}
  
  for letter in letters:
    letter_frequency[letter] = 0

  for letter in cipher_text:
    if letter in letters:
      letter_frequency[letter] += 1
  
  sorted_letter_freq = [k for k,v in sorted(letter_frequency.items(), key=lambda item: item[1],reverse=True)]
  
  plain_texts = []
  idx=0
  if sorted_letter_freq[0] == ' ':
    idx=1
  for i in range(ub):
    key = (ord(sorted_letter_freq[idx])-ord('E'))
    idx +=1
    plain_texts.append(decrypt(cipher_text,key))
  return plain_texts

def bruteForce(cipherText, giveAll=False):
  obj = {}
  for i in range(0, 26):
    text_content = decrypt(cipherText, i)
    isReliable, textBytesFound, details = cld2.detect(text_content)
    if giveAll==False:
      if(details[0][1] == 'en'):
        obj[i] = (text_content, details[0][1], details[0][2])
    else:
      obj[i] = (text_content, details[0][1], details[0][2])
  return obj

