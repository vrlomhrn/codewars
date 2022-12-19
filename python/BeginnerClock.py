def past(h, m, s):
    return (360 * h + 60 * m + s) * 1000

print(past(0, 1, 1), 61000)