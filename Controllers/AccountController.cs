using Microsoft.AspNetCore.Mvc;

namespace TvShowTracker.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
