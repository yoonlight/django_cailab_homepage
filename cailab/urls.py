from django.urls import path
from cailab import views

urlpatterns = [
    path("", views.index, name="main"),
    path("main", views.index, name="main"),
    path("professor", views.professor, name="professor"),
    path("student", views.student, name="student"),
    path("student/<int:pk>", views.BiographyDetailView.as_view(), name="student"),
    path("alumni", views.alumni, name="alumni"),
    path("news", views.news, name="news"),
    path("publications", views.publications, name="publications"),
    path("library", views.library, name="library"),
    path("library/<int:pk>", views.PostDetailView.as_view(), name="post"),
    path("seminar", views.seminar, name="seminar"),
    path("applications", views.applications, name="applications"),
]
