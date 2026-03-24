from django.shortcuts import render, redirect
from .forms import UserForm
from .models import User

# Registration form
def register(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('users_list')
    else:
        form = UserForm()
    return render(request, 'users/register.html', {'form': form})

# Display all users
def users_list(request):
    users = User.objects.all()
    return render(request, 'users/users_list.html', {'users': users})