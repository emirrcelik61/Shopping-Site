from django.shortcuts import render,redirect
from .forms import *
from django.contrib import messages

# Create your views here.

def gonder(request):
    form = GonderForm()
    if request.method == 'POST':
        form = GonderForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request,'İleti Başarıyla Gönderildi!')
            return redirect('index')
        else:
            messages.error(request,'İsim, Kullanıcı Adı, E-Posta ve Açıklama alanlarını doldurduğunuzdan emin olun!')
            return redirect('form')
    context = {
        'form':form
    }
    return render(request, 'form.html', context)