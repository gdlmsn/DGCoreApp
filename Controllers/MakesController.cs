using AutoMapper;
using DGCoreApp.Controllers.Resources;
using DGCoreApp.Models;
using DGCoreApp.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DGCoreApp.Controllers
{
    public class MakesController : Controller
    {
        private readonly DGCoreAppDbContext context;
        private readonly IMapper mapper;

        public MakesController(DGCoreAppDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        [HttpGet("/api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
            var makes =  await context.Makes.Include(mbox => mbox.Models).ToListAsync();

            return mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
    }
}
