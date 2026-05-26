import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {branchType} from './branchType'
import {promoType} from './promoType'
import {tournamentType} from './tournamentType'
import {merchandiseType} from './merchandiseType'
import {franchisePackageType} from './franchisePackageType'
import {menuItemType} from './menuItemType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, branchType, promoType, tournamentType, merchandiseType, franchisePackageType, menuItemType],
}
