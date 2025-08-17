import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTour, setSelectedTour] = useState('');

  const tours = [
    {
      id: 'alps-retreat',
      title: 'Альпийский Фитнес-Ретрит',
      location: 'Швейцария, Интерлакен',
      duration: '7 дней',
      price: '€2,890',
      image: '/img/5531e81c-3f21-4e98-ab8a-df67d46a0e0e.jpg',
      description: 'Погрузитесь в мир высокогорного фитнеса среди заснеженных пиков Альп',
      features: ['Йога на рассвете', 'Треккинг в горах', 'СПА-процедуры', 'Здоровое питание'],
      rating: 4.9,
      reviews: 127
    },
    {
      id: 'tuscany-wellness',
      title: 'Тосканский Велнес-Тур',
      location: 'Италия, Тоскана',
      duration: '5 дней',
      price: '€1,950',
      image: '/img/22bd6d77-f6d1-4606-8a1f-2d33700bb20e.jpg',
      description: 'Сочетание фитнеса и итальянской культуры в живописных холмах Тосканы',
      features: ['Пилатес на виноградниках', 'Кулинарные мастер-классы', 'Термальные источники', 'Дегустации вина'],
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'greek-islands',
      title: 'Фитнес на Греческих Островах',
      location: 'Греция, Санторини',
      duration: '6 дней',
      price: '€2,240',
      image: '/img/5531e81c-3f21-4e98-ab8a-df67d46a0e0e.jpg',
      description: 'Тренировки с видом на Эгейское море и традиционную греческую архитектуру',
      features: ['Аквааэробика', 'Кроссфит на пляже', 'Медитация на закате', 'Средиземноморская диета'],
      rating: 4.7,
      reviews: 156
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      location: 'Москва',
      text: 'Невероятный опыт! Альпийский ретрит превзошел все ожидания. Профессиональные тренеры, потрясающие виды и отличная организация.',
      rating: 5,
      tour: 'Альпийский Фитнес-Ретрит'
    },
    {
      name: 'Михаил Волков',
      location: 'Санкт-Петербург',
      text: 'Тосканский тур - идеальное сочетание активности и культуры. Каждый день был насыщен новыми впечатлениями и полезными тренировками.',
      rating: 5,
      tour: 'Тосканский Велнес-Тур'
    },
    {
      name: 'Елена Сидорова',
      location: 'Екатеринбург',
      text: 'Греческие острова дали мне заряд энергии на целый год! Профессиональный подход к каждому участнику группы.',
      rating: 4,
      tour: 'Фитнес на Греческих Островах'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-['Source_Sans_Pro']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" className="text-primary" size={28} />
              <span className="text-xl font-bold font-['Playfair_Display'] text-primary">FitTours Europe</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#tours" className="text-foreground hover:text-primary transition-colors font-medium">Туры</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О нас</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                  Забронировать
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-['Playfair_Display']">Бронирование тура</DialogTitle>
                  <DialogDescription>
                    Выберите тур и дату для создания индивидуального предложения
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tour-select">Выберите тур</Label>
                    <Select value={selectedTour} onValueChange={setSelectedTour}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тур" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((tour) => (
                          <SelectItem key={tour.id} value={tour.id}>{tour.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Предпочитаемая дата</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] text-foreground mb-6 leading-tight">
              Премиальные<br />
              <span className="text-primary">Фитнес-Туры</span> по Европе
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Эксклюзивные программы wellness-путешествий для тех, кто ценит качество, 
              комфорт и уникальные впечатления
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать тур
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-['Playfair_Display']">Быстрое бронирование</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тур" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((tour) => (
                          <SelectItem key={tour.id} value={tour.id}>{tour.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input placeholder="Ваше имя" />
                    <Input type="email" placeholder="Email для связи" />
                    <Button className="w-full bg-primary hover:bg-primary/90">Получить предложение</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Crown" className="text-primary" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Премиум сервис</h3>
              <p className="text-muted-foreground">Индивидуальный подход и высочайший уровень комфорта</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Профессиональные тренеры</h3>
              <p className="text-muted-foreground">Сертифицированные специалисты с международным опытом</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-primary" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Уникальные локации</h3>
              <p className="text-muted-foreground">Самые живописные места Европы для ваших тренировок</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-primary" size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Wellness & SPA</h3>
              <p className="text-muted-foreground">Комплексные программы восстановления и релаксации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-foreground mb-4">
              Наши Премиальные Туры
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый тур создан для максимального эффекта и незабываемых впечатлений
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    {tour.duration}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      <span className="text-sm font-medium">{tour.rating}</span>
                      <span className="text-sm text-muted-foreground">({tour.reviews})</span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-['Playfair_Display']">{tour.title}</CardTitle>
                  <CardDescription className="flex items-center text-muted-foreground">
                    <Icon name="MapPin" className="mr-1" size={16} />
                    {tour.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{tour.description}</p>
                  <div className="space-y-2 mb-4">
                    {tour.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Icon name="Check" className="text-primary mr-2" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{tour.price}</span>
                      <span className="text-muted-foreground text-sm ml-2">за человека</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-primary hover:bg-primary/90">
                          Выбрать
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="font-['Playfair_Display']">{tour.title}</DialogTitle>
                          <DialogDescription>Бронирование тура {tour.price}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border"
                            disabled={(date) => date < new Date()}
                          />
                          <Input placeholder="Ваше имя" />
                          <Input type="email" placeholder="Email" />
                          <Input type="tel" placeholder="Телефон" />
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            Забронировать за {tour.price}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-foreground mb-4">
              Отзывы Наших Клиентов
            </h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас те, кто уже путешествовал с FitTours Europe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.location}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                          size={16}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <Badge variant="outline" className="text-xs">
                    {review.tour}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-foreground mb-6">
                О FitTours Europe
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы создаем уникальные фитнес-путешествия для тех, кто не готов идти на компромиссы. 
                Каждый тур разработан с учетом индивидуальных потребностей и целей наших клиентов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Award" className="text-primary mr-3" size={24} />
                  <span className="text-lg">5+ лет опыта в организации премиальных туров</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" className="text-primary mr-3" size={24} />
                  <span className="text-lg">500+ довольных клиентов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Globe" className="text-primary mr-3" size={24} />
                  <span className="text-lg">15+ стран Европы в нашей программе</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Удовлетворенность клиентов</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка во время тура</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Уникальных программ</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">VIP</div>
                  <div className="text-sm text-muted-foreground">Сервис для каждого</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-foreground mb-4">
              Свяжитесь с Нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы создать ваше идеальное фитнес-путешествие
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-8 animate-fade-in">
              <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground mt-2">Ежедневно 9:00 - 21:00</p>
            </Card>
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Mail" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@fittours-europe.com</p>
              <p className="text-sm text-muted-foreground mt-2">Ответим в течение 2 часов</p>
            </Card>
            <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="MessageCircle" className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">+7 (985) 123-45-67</p>
              <p className="text-sm text-muted-foreground mt-2">Круглосуточно</p>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Заказать консультацию
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-['Playfair_Display']">Бесплатная консультация</DialogTitle>
                  <DialogDescription>
                    Наш специалист свяжется с вами для создания индивидуального предложения
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">Имя</Label>
                      <Input id="first-name" placeholder="Иван" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Фамилия</Label>
                      <Input id="last-name" placeholder="Иванов" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="interest">Интересующий тур</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тур" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((tour) => (
                          <SelectItem key={tour.id} value={tour.id}>{tour.title}</SelectItem>
                        ))}
                        <SelectItem value="custom">Индивидуальный тур</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Заказать звонок
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Mountain" className="text-secondary" size={28} />
                <span className="text-xl font-bold font-['Playfair_Display']">FitTours Europe</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Премиальные фитнес-туры по самым красивым местам Европы
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Туры</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Альпийские ретриты</li>
                <li>Средиземноморье</li>
                <li>Скандинавия</li>
                <li>Индивидуальные туры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Партнеры</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2" size={16} />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={16} />
                  info@fittours-europe.com
                </div>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Instagram" className="cursor-pointer hover:text-secondary transition-colors" size={20} />
                  <Icon name="Facebook" className="cursor-pointer hover:text-secondary transition-colors" size={20} />
                  <Icon name="Youtube" className="cursor-pointer hover:text-secondary transition-colors" size={20} />
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-primary-foreground/60">
            <p>&copy; 2024 FitTours Europe. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;