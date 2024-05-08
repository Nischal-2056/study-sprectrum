from django.db import models


class TimeStampMixin(models.Model):
    """
    Abstract base class with a creation
    and modification date and time
    """

    class Meta:
        abstract = True

    created = models.DateTimeField("Creation date and time", auto_now_add=True)
    updated = models.DateTimeField("Modification date and time", auto_now=True)


class Carousel(TimeStampMixin):
    title = models.TextField()
    description = models.TextField()
    image = models.ImageField(upload_to="carousel/", blank=False)
    order = models.IntegerField(default=0)

    class Meta:
        db_table = "carousel"
        verbose_name = "Carousel"
        verbose_name_plural = "Carousels"
        ordering = ["order"]

    def __str__(self):
        return self.title


class Testimonial(TimeStampMixin):
    RATES = [(i, i) for i in range(1, 6)]
    title = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to="testimonials/")
    description = models.TextField()
    rate = models.IntegerField(choices=RATES)
    order = models.IntegerField(default=0)

    class Meta:
        db_table = "testimonial"
        ordering = ("order",)
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"

    def __str__(self):
        return self.title


class SuccessStory(TimeStampMixin):
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    image = models.ImageField(upload_to="success_stories/", blank=False)
    visa_type = models.CharField(max_length=100)
    visa_status = models.CharField(max_length=100)
    order = models.IntegerField(default=0)

    class Meta:
        db_table = "success_story"
        verbose_name = "Success Story"
        verbose_name_plural = "Success Stories"
        ordering = ["order"]

    def __str__(self):
        return self.name


class Banner(TimeStampMixin):
    title = models.TextField()
    description = models.TextField()
    image = models.ImageField(upload_to="banner/", null=True)

    class Meta:
        db_table = "banner"
        verbose_name = "Banner"
        verbose_name_plural = "Banners"

    def __str__(self):
        return self.title
