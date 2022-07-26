# Generated by Django 4.0.6 on 2022-07-28 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance_database', '0006_alter_coordinates_attendee_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='MessageForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField(max_length=500)),
            ],
        ),
        migrations.AddField(
            model_name='present',
            name='distance',
            field=models.DecimalField(decimal_places=2, default=5, max_digits=12),
            preserve_default=False,
        ),
    ]
