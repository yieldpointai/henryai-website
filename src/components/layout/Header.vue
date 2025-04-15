<script setup>
import companyLogo from '@/assets/logos/company-logo.png';
import { COMPANY_NAME } from '@/config.js';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle, // Import this for link styling
} from '@/components/ui/navigation-menu'
</script>

<template>
  <header class="border-b">
    <div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img :src="companyLogo" :alt="COMPANY_NAME + ' Logo'" class="h-8 w-auto mr-3"> <!-- Adjusted size -->
        <span class="font-semibold text-lg">{{ COMPANY_NAME }}</span> <!-- Optional: Add company name next to logo -->
      </a>

      <!-- Navigation Menu -->
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" :class="navigationMenuTriggerStyle()">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" :class="navigationMenuTriggerStyle()">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" :class="navigationMenuTriggerStyle()">
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
          <!-- Add more items or dropdowns as needed -->
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </header>
</template>

<style scoped>
/* Remove previous styles, rely on Tailwind and shadcn components */
/* Add any component-specific overrides here if necessary */
</style>
