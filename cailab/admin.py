from django.contrib import admin
from cailab.models import Biography, Category, Post

# Register your models here.
admin.site.register(Category)
admin.site.register(Post)
admin.site.register(Biography)