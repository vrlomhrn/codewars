def nb_year(p0, percent, aug, p, year = 0):
    while(p0 < p):
        year += 1
        p0 = p0 + int(p0 * (percent / 100)) + aug
        return nb_year(p0, percent, aug, p, year)
    return year