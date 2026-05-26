import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const menuItemType = defineType({
  name: 'menuItem',
  title: 'Menu',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({ name: 'branchSlug', title: 'Slug Cabang', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Makanan', value: 'food' },
          { title: 'Minuman', value: 'drink' },
        ],
      },
    }),
    defineField({ name: 'name', title: 'Nama Item', type: 'string' }),
    defineField({ name: 'price', title: 'Harga (Rp)', type: 'number' }),
    defineField({ name: 'description', title: 'Deskripsi', type: 'text', rows: 2 }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'available', title: 'Tersedia', type: 'boolean', initialValue: true }),
    defineField({ name: 'order', title: 'Urutan', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'branchSlug', media: 'photo' },
  },
})
