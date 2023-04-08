from article_python import (
    count_articles_by_category,
    count_articles_by_author,
    average_words_per_article,
)
import pytest


@pytest.fixture
def articles():
    return [
        {
            "title": "How to train your dragon",
            "author": "John Smith",
            "category": "Fantasy",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing.",
        },
        {
            "title": "On the Origin of Species",
            "author": "Charles Darwin",
            "category": "Science",
            "content": "Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "category": "Fiction",
            "content": "Duis aute irure dolor in reprehenderit in voluptate.",
        },
    ]


def test_count_articles_by_category(articles):
    assert count_articles_by_category(articles) == {
        "Fantasy": 1,
        "Science": 1,
        "Fiction": 1,
    }


def test_count_articles_by_author(articles):
    assert count_articles_by_author(articles) == {
        "John Smith": 1,
        "Charles Darwin": 1,
        "Harper Lee": 1,
    }


def test_average_words_per_article(articles):
    assert average_words_per_article(articles) == {
        "How to train your dragon": 5.5,
        "On the Origin of Species": 6.0,
        "To Kill a Mockingbird": 6.0,
    }
