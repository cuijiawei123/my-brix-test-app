'use client'
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import * as React from "react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    Bookmark,
    CircleArrowLeft,
    CircleArrowRight,
    Columns2,
    GalleryThumbnails,
    History,
    Share, ThumbsDown,
    ThumbsUp
} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {useSidebar} from "@/components/ui/sidebar";


export default function Home() {

    const  cardList = [
        {
        text: '12dfdsfsdfdsfsdfsdf',
            id: '1'
    },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '2'
        },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '3'
        },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '4'
        },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '5'
        },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '6'
        },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '7'
        },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '8'
        },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '9'
        },
        {
            text: '12dfdsfsdfdsfsdfsdf',
            id: '10'
        },
    ]
    const { toggleSidebar } = useSidebar()
  return (
      <Card className={'flex-1 border-0 shadow m-2 overflow-hidden'}>
          <Tabs defaultValue="home" className="mt-1 w-full">
              <TabsList className="w-full justify-start rounded-none border-b my-2 border-slate-200 ">
                  <TabsTrigger value="home"
                               className=" rounded-b-none pb-[10px] data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">My
                      Feed</TabsTrigger>
                  <TabsTrigger value="profile"
                               className="rounded-b-none pb-[10px] data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">Hot</TabsTrigger>
                  <TabsTrigger value="settings"
                               className="rounded-b-none pb-[10px] data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">CVPR</TabsTrigger>
                  <TabsTrigger value="about"
                               className="rounded-b-none pb-[10px] data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">LLMs</TabsTrigger>
                  <TabsTrigger value="about"
                               className="rounded-b-none pb-[10px] data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none">Staff
                      picks</TabsTrigger>
                  <div className={'flex ml-auto mb-3'}>
                      <Tabs defaultValue="all">
                          <div className="flex items-center px-0.5 rounded-[10px] shadow bg-gray-50 mr-10">
                              <TabsList className="ml-auto">
                                  <TabsTrigger
                                      value="all"
                                      className="text-zinc-600 rounded-[10px]  data-[state=active]:text-blue-500 data-[state=active]:bg-white   dark:text-zinc-200"
                                  >
                                      <Columns2 onClick={toggleSidebar}/> Sides
                                  </TabsTrigger>
                                  <TabsTrigger
                                      value="unread"
                                      className="text-zinc-600 rounded-[10px] data-[state=active]:text-blue-500 data-[state=active]:bg-white dark:text-zinc-200"
                                  >
                                      <GalleryThumbnails onClick={toggleSidebar} /> Pages
                                  </TabsTrigger>
                              </TabsList>
                          </div>
                      </Tabs>
                      <div>
                          <Select>
                              <SelectTrigger className="w-[180px] rounded-xl border-gray-200">
                                  <History /><SelectValue className={'border-r-2 '} placeholder="Skip until" />
                              </SelectTrigger>
                              <SelectContent>
                                  <SelectItem value="light">Light</SelectItem>
                                  <SelectItem value="dark">Dark</SelectItem>
                                  <SelectItem value="system">System</SelectItem>
                              </SelectContent>
                          </Select>
                      </div>
                  </div>
              </TabsList>
              <TabsContent value="home" className="w-full">
                  <div className="flex items-center justify-center mt-10 flex-col">
                      <div className={'flex justify-between w-1/2'}>
                          <h2 className="text-2xl font-bold mb-2">Single Pages</h2>
                          <div className={'flex justify-between'}>
                              <Button variant={'outline'}
                                      className={'rounded-l-[10px] border-gray-200'}><CircleArrowLeft/>Previos</Button>
                              <Button variant={'outline'} className={' border-gray-200'}>2 of 10 </Button>
                              <Button variant={'outline'}
                                      className={'rounded-r-[10px] border-gray-200'}>Next<CircleArrowRight/></Button>
                          </div>
                      </div>
                      <div className={'flex justify-start w-1/2 mt-[12rem]'}>
                          <div><h1 className={'text-5xl font-bold'}>Chain of Thought Empowers</h1><br/>
                              <h1 className={'text-5xl font-bold'}>Transformers to Solve Inherently</h1><br/>
                              <h1 className={'text-5xl font-bold'}>Serial Problems</h1><br/>
                          </div>
                      </div>
                      <div className={'flex justify-start w-1/2 mt-[12rem]'}>
                          <Button variant={'default'} className={'rounded-[10px] bg-black text-white'}><Bookmark/>Collect(120)</Button>
                          <Button variant={'default'} className={'ml-2 rounded-[10px] bg-blue-500 text-white'}><Share/>share</Button>
                          <Button variant={'outline'} className={'ml-2 rounded-l-[10px] border-gray-200'}><ThumbsUp
                              className={'text-gray-500 '}/>Like</Button>
                          <Button variant={'outline'}
                                  className={'rounded-r-[10px] border-gray-200'}>DisLike<ThumbsDown
                              className={'text-gray-500 '}/></Button>
                      </div>
                  </div>
                  <div className="mt-[12rem] border-t border-gray-200"></div>
                  <Pagination className={'justify-start'}>
                      <PaginationContent>
                          Pages
                          <PaginationItem>
                              <PaginationPrevious href="#" />
                          </PaginationItem>
                          <PaginationItem>
                              <PaginationLink href="#"> 2 of 10</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                              <PaginationNext href="#" />
                          </PaginationItem>
                      </PaginationContent>
                  </Pagination>
                  <div className={'flex justify-between gap-5 overflow-x-auto pb-10'}>
                      {cardList.map((item)=> {
                      return (
                          <Card key={item.text} className={'w-52 ml-2 h-[10rem] shadow border-gray-200 mt-6'}>
                              <CardContent className={'my-8'}>
                                  <p>Card Content Card ContentCard </p>
                              </CardContent>
                          </Card>
                      )
                  })}
                  </div>
                 
              </TabsContent>
              <TabsContent value="profile" className="mt-4">
                  <h2 className="text-2xl font-bold mb-2">个人资料</h2>
                  <p>在这里您可以查看和编辑您的个人信息。</p>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                  <h2 className="text-2xl font-bold mb-2">设置</h2>
                  <p>在这里您可以调整您的账户设置和偏好。</p>
              </TabsContent>
              <TabsContent value="about" className="mt-4">
                  <h2 className="text-2xl font-bold mb-2">关于我们</h2>
                  <p>了解更多关于我们公司和服务的信息。</p>
              </TabsContent>
          </Tabs>
      </Card>

  );
}
