from django.forms import ModelForm
from .models import *

class GonderForm(ModelForm):
    class Meta:
        model = Gonder
        fields =['isim','adres','sehir','email','aciklama']

    def __init__(self,*args,**kwargs):
        super(GonderForm,self).__init__(*args,**kwargs)
        for name, field in self.fields.items():
            field.widget.attrs.update({'class':'form-control'})