"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Home,
  Users,
  Calendar,
  Settings,
  LogOut,
  Bell,
  Search,
  TrendingUp,
  UserCheck,
  Building2,
  Eye,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import {
  Line,
  LineChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/src/components/ui/card";

const tenantConfig = {
  name: "Vale Imóveis",
  logo: "/valeimoveis/vale-imoveis-logo.png",
  logoMini: "/valeimoveis/vale-imoveis-logo-mini.png",
  colors: {
    primary: "#D91502",
    black: "#131313",
    white: "#FFFFFF",
  },
};

const inquiriesData = [
  { month: "Jan", inquiries: 42 },
  { month: "Feb", inquiries: 58 },
  { month: "Mar", inquiries: 65 },
  { month: "Apr", inquiries: 78 },
  { month: "May", inquiries: 92 },
  { month: "Jun", inquiries: 105 },
];

const visitsData = [
  { day: "Mon", visits: 12 },
  { day: "Tue", visits: 15 },
  { day: "Wed", visits: 18 },
  { day: "Thu", visits: 16 },
  { day: "Fri", visits: 20 },
  { day: "Sat", visits: 25 },
  { day: "Sun", visits: 8 },
];

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "properties", label: "Imóveis", icon: Home },
    { id: "leads", label: "Leads", icon: UserCheck },
    { id: "clients", label: "Clientes", icon: Users },
    { id: "visits", label: "Visitas", icon: Calendar },
    { id: "agents", label: "Corretores", icon: Building2 },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  const stats = [
    {
      label: "Imóveis Ativos",
      value: "87",
      change: "+12 novos",
      icon: Home,
      trend: "up",
    },
    {
      label: "Leads Ativos",
      value: "234",
      change: "+18.3%",
      icon: UserCheck,
      trend: "up",
    },
    {
      label: "Visitas Agendadas",
      value: "52",
      change: "+8 hoje",
      icon: Calendar,
      trend: "up",
    },
    {
      label: "Negócios Fechados",
      value: "15",
      change: "+3 este mês",
      icon: Building2,
      trend: "up",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <motion.aside
        className="hidden lg:flex lg:flex-col w-64 bg-white border-r border-gray-200 fixed h-screen"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 border-b border-gray-200">
          <Image
            src={tenantConfig.logo || "/placeholder.svg"}
            alt={tenantConfig.name}
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                activeMenu === item.id
                  ? "text-white"
                  : "text-[#767678] hover:bg-gray-100 hover:text-[#131313]"
              }`}
              style={{
                backgroundColor:
                  activeMenu === item.id
                    ? tenantConfig.colors.primary
                    : "transparent",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <motion.div
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-all cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: tenantConfig.colors.primary }}
            >
              CS
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#131313]">
                Deborah de Paula
              </p>
              <p className="text-xs text-[#767678]">Corretora</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#767678]" />
          </motion.div>
          <motion.button
            className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-all cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="w-4 h-4" />
            Sair
          </motion.button>

          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center gap-2">
            <span className="text-xs text-[#767678]">Powered by</span>
            <Image
              src="/logo2.png"
              alt="T-YOU"
              width={60}
              height={20}
              className="h-4 w-auto opacity-60"
            />
          </div>
        </div>
      </motion.aside>

      {/* Sidebar - Mobile */}
      {isSidebarOpen && (
        <>
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
          />
          <motion.aside
            className="lg:hidden fixed left-0 top-0 h-screen w-64 bg-white z-50 shadow-xl flex flex-col"
            initial={{ x: -264 }}
            animate={{ x: 0 }}
            exit={{ x: -264 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <Image
                src={tenantConfig.logo || "/placeholder.svg"}
                alt={tenantConfig.name}
                width={150}
                height={50}
                className="h-10 w-auto"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(false)}
                className="cursor-pointer"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                    activeMenu === item.id
                      ? "text-white"
                      : "text-[#767678] hover:bg-gray-100 hover:text-[#131313]"
                  }`}
                  style={{
                    backgroundColor:
                      activeMenu === item.id
                        ? tenantConfig.colors.primary
                        : "transparent",
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 py-2">
                <span className="text-xs text-[#767678]">Powered by</span>
                <Image
                  src="/logo2.png"
                  alt="T-YOU"
                  width={60}
                  height={20}
                  className="h-4 w-auto opacity-60"
                />
              </div>
            </div>
          </motion.aside>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden cursor-pointer"
                  onClick={() => setIsSidebarOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                </Button>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-[#131313]">
                    Dashboard
                  </h1>
                  <p className="text-sm text-[#767678] hidden sm:block">
                    Bem-vindo, Carlos!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                {/* Search - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <Search className="w-4 h-4 text-[#767678]" />
                  <input
                    type="text"
                    placeholder="Buscar imóveis..."
                    className="bg-transparent border-none outline-none text-sm text-[#131313] w-48 cursor-text"
                  />
                </div>

                {/* Notifications */}
                <motion.button
                  className="relative p-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bell className="w-5 h-5 text-[#767678]" />
                  <span
                    className="absolute top-1 right-1 w-2 h-2 rounded-full"
                    style={{ backgroundColor: tenantConfig.colors.primary }}
                  />
                </motion.button>

                <div
                  className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                  style={{ backgroundColor: tenantConfig.colors.primary }}
                >
                  CS
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-[#767678]">
                      {stat.label}
                    </CardTitle>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${tenantConfig.colors.primary}10`,
                      }}
                    >
                      <stat.icon
                        className="w-4 h-4"
                        style={{ color: tenantConfig.colors.primary }}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#131313] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm flex items-center gap-1 text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#131313]">
                    Consultas de Imóveis
                  </CardTitle>
                  <CardDescription>
                    Número de consultas nos últimos 6 meses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[250px] sm:h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={inquiriesData}
                        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" stroke="#767678" fontSize={12} />
                        <YAxis stroke="#767678" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            padding: "8px 12px",
                          }}
                          labelStyle={{ color: "#131313", fontWeight: "600" }}
                        />
                        <Line
                          type="monotone"
                          dataKey="inquiries"
                          stroke={tenantConfig.colors.primary}
                          strokeWidth={3}
                          dot={{ fill: tenantConfig.colors.primary, r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#131313]">
                    Visitas Agendadas
                  </CardTitle>
                  <CardDescription>
                    Visitas agendadas esta semana
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[250px] sm:h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={visitsData}
                        margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="day" stroke="#767678" fontSize={12} />
                        <YAxis stroke="#767678" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            padding: "8px 12px",
                          }}
                          labelStyle={{ color: "#131313", fontWeight: "600" }}
                        />
                        <Bar
                          dataKey="visits"
                          fill={tenantConfig.colors.primary}
                          radius={[8, 8, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-[#131313]">
                  Atividades Recentes
                </CardTitle>
                <CardDescription>Últimas ações e atualizações</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Novo lead capturado",
                      time: "2 minutos atrás",
                      user: "Maria Santos",
                      icon: UserCheck,
                      detail: "Interessada em apartamento 3 quartos",
                    },
                    {
                      action: "Visita agendada",
                      time: "1 hora atrás",
                      user: "João Paulo",
                      icon: Calendar,
                      detail: "Casa Jardim Europa - Amanhã 14h",
                    },
                    {
                      action: "Imóvel visualizado",
                      time: "3 horas atrás",
                      user: "Ana Costa",
                      icon: Eye,
                      detail: "Cobertura no Centro - 15 visualizações",
                    },
                    {
                      action: "Proposta recebida",
                      time: "5 horas atrás",
                      user: "Roberto Lima",
                      icon: Building2,
                      detail: "R$ 850.000 - Apartamento Vila Mariana",
                    },
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${tenantConfig.colors.primary}10`,
                        }}
                      >
                        <activity.icon
                          className="w-5 h-5"
                          style={{ color: tenantConfig.colors.primary }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#131313]">
                          {activity.action}
                        </p>
                        <p className="text-sm text-[#767678]">
                          {activity.user}
                        </p>
                        <p className="text-xs text-[#767678] mt-1">
                          {activity.detail}
                        </p>
                      </div>
                      <span className="text-sm text-[#767678] flex-shrink-0">
                        {activity.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
