
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-800">
                Se connecter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Se connecter
              </Button>
              <div className="text-center">
                <a href="#" className="text-sm text-red-600 hover:underline">
                  Mot de passe oublié?
                </a>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Pas encore de compte?{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    S'inscrire
                  </a>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
