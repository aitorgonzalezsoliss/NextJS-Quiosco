import { prisma } from '@/src/lib/prisma'
import CategoryIcon from '../ui/CategoryIcon';
import Logo from '../ui/Logo';

// import { PrismaClient } from '@prisma/client'

// const prismaClient = new PrismaClient()

async function getCategories() {
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {
  
  const categorias = await getCategories()

  // console.log(categorias);
  
  return (
    <aside className='md:w-72 md:h-screen bg-white'>
      <Logo />
      <nav className="mt-10">
        {categorias.map(category => (
          <CategoryIcon 
            key={category.id}
            category={category}
          />
        ))}
      </nav>
    </aside>
  )
}
