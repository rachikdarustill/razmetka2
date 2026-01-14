import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  company: string;
  email: string;
  catalogSize?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();
    
    // Базовая валидация
    if (!data.name || !data.company || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Логируем данные лида (в продакшене здесь будет отправка в CRM)
    console.log('New lead received:', {
      name: data.name,
      company: data.company,
      email: data.email,
      catalogSize: data.catalogSize,
      message: data.message,
      timestamp: new Date().toISOString(),
    });
    
    // В продакшене здесь будет:
    // 1. Отправка данных в CRM (HubSpot, Salesforce, etc.)
    // 2. Отправка уведомления на email команде продаж
    // 3. Сохранение в базу данных
    // 4. Интеграция с маркетинговыми платформами
    
    // Пример интеграции с CRM:
    // await fetch('https://api.your-crm.com/leads', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.CRM_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });
    
    // Возвращаем успешный ответ
    return NextResponse.json(
      { 
        success: true,
        message: 'Lead submitted successfully',
        leadId: `LEAD-${Date.now()}`, // В продакшене это будет ID из CRM
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Опционально: можно добавить GET для проверки здоровья endpoint
export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok',
      endpoint: '/api/lead',
      methods: ['POST'],
    },
    { status: 200 }
  );
}
