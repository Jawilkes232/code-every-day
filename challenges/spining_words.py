def spin_words(sentence):
    sentence_list = sentence.split()
    new_string = []
    for word in sentence_list:
        if len(word) >= 5:
            new_string.append(word[::-1])
        else:
            new_string.append(word)
    string = " ".join(new_string)
    return string


print(spin_words('This is a sentence of words appleberry'))
