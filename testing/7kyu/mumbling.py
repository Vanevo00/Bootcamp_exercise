# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"

def mumbling(str):
  strList = list(str.upper())
  finalArr = []
  
  for i in range(len(strList)):
    finalArr.append(strList[i] + (strList[i] * i).lower())

  return("-".join(finalArr))

mumbling("pes")