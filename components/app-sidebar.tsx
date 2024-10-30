import {
    BadgeCheck, Bell,
    Calendar,
    ChevronDown, ChevronRight,
    CreditCard,
    LogOut,
    Search,
    Sparkles,
    User
} from "lucide-react"

import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarTrigger,
} from "@/components/ui/sidebar"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";


export function AppSidebar() {
    return (
        <Sidebar className={'group-data-[side=left]:border-r-0'}>
            <SidebarContent className={'mt-1'}>
                <SidebarTrigger className={'ml-auto'}/>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem key='Search'>
                                <SidebarMenuButton asChild>
                                    <a>
                                        <Search/>
                                        <span>Search</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key='news'>
                                <SidebarMenuButton asChild>
                                    <a>
                                        <Calendar/>
                                        <span>news</span>
                                    </a>
                                </SidebarMenuButton>
                                <SidebarMenuBadge className={'bg-red-600 rounded-full px-2 text-white'}>24</SidebarMenuBadge>
                            </SidebarMenuItem>
                            <SidebarMenuItem key='About Me'>
                                <SidebarMenuButton asChild>
                                    <a>
                                        <User/>
                                        <span>About Me</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Collections</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <Collapsible className="group/collapsible">
                            <SidebarMenuItem key='Energe-Based Model'>
                                <CollapsibleTrigger asChild>
                                <SidebarMenuButton asChild>
                                    <a>
                                        <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                        <span>Energe-Based Model</span>
                                    </a>
                                </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuItem key='Robot Manipulation'>
                                                <SidebarMenuButton asChild>
                                                    <a>
                                                        <Calendar/>
                                                        <span>Robot Manipulation</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                            <SidebarMenuItem key='Machine Learning'>
                                                <SidebarMenuButton asChild>
                                                    <a>
                                                        <User/>
                                                        <span>About Me</span>
                                                    </a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>

                        <SidebarMenu>
                            <Collapsible  className="group/collapsible">
                                <SidebarMenuItem key='Robot Maniplulation'>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton asChild>
                                            <a>
                                                <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                                <span>Robot Maniplulation</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuItem key='Robot Manipulation'>
                                                    <SidebarMenuButton asChild>
                                                        <a>
                                                            <Calendar/>
                                                            <span>Robot Manipulation</span>
                                                        </a>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                                <SidebarMenuItem key='Machine Learning'>
                                                    <SidebarMenuButton asChild>
                                                        <a>
                                                            <User/>
                                                            <span>About Me</span>
                                                        </a>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>

                        <SidebarMenu>
                            <Collapsible  className="group/collapsible">
                                <SidebarMenuItem key='Machine learning'>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton asChild>
                                            <a>
                                                <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                                <span>Machine learning</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuItem key='Robot Manipulation'>
                                                    <SidebarMenuButton asChild>
                                                        <a>
                                                            <Calendar/>
                                                            <span>Robot Manipulation</span>
                                                        </a>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                                <SidebarMenuItem key='Machine Learning'>
                                                    <SidebarMenuButton asChild>
                                                        <a>
                                                            <User/>
                                                            <span>About Me</span>
                                                        </a>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Others</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem key='Settings'>
                                <SidebarMenuButton asChild>
                                    <a>
                                        <Search/>
                                        <span>Settings</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key='Help & Support'>
                                <SidebarMenuButton asChild>
                                    <a>
                                        <Calendar/>
                                        <span>Help & Support</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Card className={'bg-white border-0'}>
                            <CardHeader>
                                <CardTitle className={'flex justify-start items-center'}><Sparkles className={'text-blue-500  mr-1'}/><p className="bg-gradient-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent">
                                    Try Pro
                                </p></CardTitle>

                            </CardHeader>
                            <CardContent>
                                <p className={'text-sm text-gray-500'}>Upgrade for image upload,smarter AI, and more Pro Search.</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant={'default'} className={'bg-gray-100'}>Learn more</Button>
                            </CardFooter>
                        </Card>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg">
                                        {/*<AvatarImage*/}
                                        {/*    src={data.user.avatar}*/}
                                        {/*    alt={data.user.name}*/}
                                        {/*/>*/}
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        cuijiawei
                      </span>
                                        <span className="truncate text-xs">
                        cuij523@gmail.com
                      </span>
                                    </div>
                                    <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                                side="right"
                                align="end"
                                sideOffset={15}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <Avatar className="h-8 w-8 rounded-lg">
                                            {/*<AvatarImage*/}
                                            {/*    src={data.user.avatar}*/}
                                            {/*    alt={data.user.name}*/}
                                            {/*/>*/}
                                            <AvatarFallback className="rounded-lg">
                                                CN
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          cuijiawei
                        </span>
                                            <span className="truncate text-xs">
                          cuij523@gmail.com
                        </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Sparkles />
                                        Upgrade to Pro
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <BadgeCheck />
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard />
                                        Billing
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell />
                                        Notifications
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
