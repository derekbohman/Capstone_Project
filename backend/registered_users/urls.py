from django.urls import path, include
from cars import views

urlpatterns = [
    path('', views.user_cars),
    path('all/', views.get_all_cars),
]
