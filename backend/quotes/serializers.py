from rest_framework import serializers
from .models import Quote


class QuotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ('id', 'quote', 'author')
