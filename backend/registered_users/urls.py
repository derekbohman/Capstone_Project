from django.urls import path
from registered_users import views

urlpatterns = [
    path('all/', views.get_all_users),
    path('register/', views.register_user),
    path('<int:pk>/', views.profile_settings)
]
