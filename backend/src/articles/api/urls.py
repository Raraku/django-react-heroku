from django.urls import path
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"", ArticleViewSet, base_name="article")
urlpatterns = router.urls
