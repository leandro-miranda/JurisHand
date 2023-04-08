import requests
import csv


def get_articles():
    url = "http://localhost:3007/articles"
    response = requests.get(url)
    return response.json()


def count_articles_by_category(articles):
    article_count = {}
    for article in articles:
        category = article["category"]
        if category in article_count:
            article_count[category] += 1
        else:
            article_count[category] = 1
    return article_count


def count_articles_by_author(articles):
    author_count = {}
    for article in articles:
        author = article["author"]
        if author in author_count:
            author_count[author] += 1
        else:
            author_count[author] = 1
    return author_count


def average_words_per_article(articles):
    total_words = 0
    for article in articles:
        total_words += len(article["content"].split())

    avg_words = {}
    for article in articles:
        article_title = article["title"]
        avg_words[article_title] = total_words / len(
            article["content"].split()
        )
    return avg_words


def export_csv(article_count, author_count, avg_words):
    with open("Relatorio_Artigos_Juridicos.csv", "w", newline="") as csvfile:
        fieldnames = [
            "média de palavras por artigo",
            "quantidade de artigos por autor",
            "quantidade de artigos por categoria",
        ]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerow(
            {
                "quantidade de artigos por categoria": article_count,
                "quantidade de artigos por autor": author_count,
                "média de palavras por artigo": avg_words,
            }
        )


articles = get_articles()
count_articles_by_category(articles)
count_articles_by_author(articles)
average_words_per_article(articles)
export_csv(
    count_articles_by_category(articles),
    count_articles_by_author(articles),
    average_words_per_article(articles),
)
