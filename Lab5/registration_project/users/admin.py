from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'name', 'email', 'age', 'gender')
    # Optional: Add a password input widget if you want
    # But normally just enter text in Admin

admin.site.register(User, UserAdmin)