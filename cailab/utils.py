
import pandas as pd
import re

def preprocessing_journal_data(recent_years=2017):
    def check_whitespace(string):
        return string.isspace()

    sci_journals = pd.DataFrame(pd.read_csv("E:\Github_project/web_dev/django_webpage/data/international_journals.csv"))
    se = sci_journals['international']
    regex = "\[.*\]|\s-\s.*"
    se_list = list(se)
    journal_publication_date_list = []

    for idx, text in enumerate(se_list):
        if text[:3] == 'SCI':
            text = re.sub(regex, '', text.replace("SCI ", ""))
            se_list[idx] = text[1:]
    
        if check_whitespace(text[-1]):
            journal_publication_date_list.append(text[-6:-2])
        else:
            journal_publication_date_list.append(text[-6:-1])
    
    date_count = 0

    for date in journal_publication_date_list:
        date_count += 1
        if int(date) < recent_years:
            date_count -= 1
            break

    return se_list[:date_count]