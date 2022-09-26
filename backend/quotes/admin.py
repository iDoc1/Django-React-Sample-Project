import imp
from django.contrib import admin
from .models import Quote

class QuotesAdmin(admin.ModelAdmin):
    list_display = ('author', 'quote')

admin.site.register(Quote) 
