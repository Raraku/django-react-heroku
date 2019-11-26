from rest_framework import viewsets
from .serializers import ArticleSerializer
from articles.models import Article
from rest_framework.permissions import AllowAny


class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes=[AllowAny,]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

