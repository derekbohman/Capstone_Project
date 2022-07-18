from django.urls import path, include
from registered_users import views

urlpatterns = [
    path('all/', views.get_all_users),
    path('create/', views.create_user),
    path('<int:pk>/', views.profile_settings)
]
