from django.shortcuts import render
from rest_framework import viewsets
from .serializers import QuotesSerializer
from .models import Quote


class QuotesView(viewsets.ModelViewSet):
    """
    API endpoints that allows Quotes to be viewed or edited
    """
    serializer_class = QuotesSerializer

    def get_queryset(self):
        """
        Optionally filters the returned queryset by the given author specified as a 
        query parameter
        """
        queryset = Quote.objects.all()
        author = self.request.query_params.get('author')
        if author is not None:
            queryset = queryset.filter(author=author)
        return queryset
