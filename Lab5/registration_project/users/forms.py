from django import forms
from .models import User

class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)  # hide password

    class Meta:
        model = User
        fields = ['name', 'username', 'password', 'age', 'gender', 'email']