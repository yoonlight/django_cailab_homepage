from django.http import request
from django.shortcuts import render
from .models import Category, Post, Biography
from django.views.generic import DetailView
from django.core.paginator import Paginator
import os
from .utils import *

# Create your views here.
def index(req):
    return render(req, "index.html")

def publications(req):
    pub_list = preprocessing_journal_data()
    context = {'data': pub_list}
    return render(req, "publications.html", context=context)

def professor(req):
    return render(req, "professor.html")

def applications(req):
    return render(req, "applications.html")

def student(req):
    biographies = Biography.objects.all()
    return render(req, "student.html", {'biographies': biographies})

def news(req):
    return render(req, "news.html")

def alumni(req):
    return render(req, "alumni.html")

def library(req):
    post_list = Post.objects.order_by('-createDate')
    paginator = Paginator(post_list, 10)
    page = req.GET.get('page')
    posts = paginator.get_page(page)
    return render(req, "library.html", {'posts': posts})

def seminar(req):
    return render(req, "seminar.html")

class BiographyDetailView(DetailView):
    model = Biography

class PostDetailView(DetailView):
    model = Post

    def get_context_data(self, **kwargs):
        context = super(PostDetailView, self).get_context_data(**kwargs)
        temp = Post.objects.order_by('-createDate')
        paginator = Paginator(temp, 10)
        page = self.request.GET.get('page')
        posts = paginator.get_page(page)
        context['post_list'] = posts
        return context
    